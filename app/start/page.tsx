import { redirect } from "next/navigation";

/**
 * Get started → sends users into the transfer flow.
 */
export default function StartPage() {
  redirect("/transfer");
}
