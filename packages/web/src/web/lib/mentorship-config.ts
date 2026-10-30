/** Add the official Hotmart checkout URL here when it is available. */
export const MENTORSHIP_CHECKOUT_URL = "";

export function getMentorshipCheckoutUrl(checkoutUrl: string, search: string): string {
  if (!checkoutUrl) return "#investimento";

  const checkout = new URL(checkoutUrl);
  const params = new URLSearchParams(search);
  for (const [key, value] of params) {
    if (key.toLowerCase().startsWith("utm_") || ["fbclid", "gclid"].includes(key.toLowerCase())) {
      checkout.searchParams.set(key, value);
    }
  }
  return checkout.toString();
}
