// import { createClient } from '@/utils/supabase.server';
// import { NextRequest, NextResponse } from 'next/server';

// export async function proxy(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   if (pathname.startsWith('/admin')) {
//     const supabase = await createClient();
//     const { data: { session } } = await supabase.auth.getSession()
//     if (!session) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }
