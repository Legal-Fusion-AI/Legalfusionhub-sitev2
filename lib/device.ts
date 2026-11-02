/** True on phones and tablets, where the demo buttons should call or text the demo line. */
export function prefersPhone(): boolean {
  const uaData = (navigator as Navigator & { userAgentData?: { mobile?: boolean } })
    .userAgentData;
  if (uaData?.mobile) return true;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}
