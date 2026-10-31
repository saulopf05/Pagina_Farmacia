/** Official Hotmart checkout URL for the mentorship. */
export const MENTORSHIP_CHECKOUT_URL = "https://go.hotmart.com/J108268247C?ap=b960";

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
