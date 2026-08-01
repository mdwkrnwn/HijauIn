"use server"
import { GoogleGenAI, Content } from "@google/genai";
import { createClient } from "@/utils/supabase.server";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!
});

export async function continueChat(userId: string, newUserPrompt: string) {
  const supabase = await createClient();

  const { data: history, error } = await supabase
    .from('messages')
    .select('role, content')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(20);

  if (error) throw new Error("Database fetch failed");

  const formattedHistory: Content[] = history.map(msg => ({
    role: msg.role as 'user' | 'model',
    parts: [{ text: msg.content }]
  }));

  const fullContents: Content[] = [
    ...formattedHistory,
    { role: 'user', parts: [{ text: newUserPrompt }] }
  ];

  const result = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: fullContents,
    config: {
      systemInstruction: `Kamu adalah Eco AI, asisten dan konsultan gaya hidup hijau (Green Coach) untuk aplikasi HijauIn. 

      Tujuan utamamu adalah membantu pengguna yang ingin menjaga bumi, mengurangi sampah, menghemat energi, dan menerapkan gaya hidup ramah lingkungan secara praktis dan berkelanjutan.

      Panduan Komunikasi:
      1. Bahasamu harus ramah, suportif, edukatif, dan selalu berbahasa Indonesia yang santun serta mudah dipahami.
      2. Berikan saran konkret dan mudah dilakukan sehari-hari di Indonesia (misalnya: memilah sampah rumah tangga, menggunakan komposting, membawa tumbler/tas belanja, hemat air/listrik, transportasi umum).
      3. Gunakan nada bicara yang memotivasi tanpa menggurui secara berlebihan.
      4. Jika relevan, sertakan saran aksi kecil atau poin apresiasi untuk semangat mereka.`
    }
  });

  const aiResponseText = result.text || "No response generated.";

  await supabase.from('messages').insert([
    { user_id: userId, role: 'user', content: newUserPrompt },
    { user_id: userId, role: 'model', content: aiResponseText }
  ]);

  return aiResponseText;
}
