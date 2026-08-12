import { getChatGPTUser } from "./chatgpt-auth";
import TransportApp from "./transport-app";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getChatGPTUser();
  return <TransportApp authenticatedName={user?.displayName ?? null} />;
}
