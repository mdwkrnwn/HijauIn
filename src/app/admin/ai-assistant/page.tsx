"use server"
import { getSession } from "../components/action";
import AI from "./AI"

export default async function AIPage() {
  const { userProfiles } = await getSession();
  return (
    <AI userProfiles={userProfiles} />
  );
}