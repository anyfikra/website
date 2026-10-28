"use client";

import { sendGAEvent } from "@next/third-parties/google";

interface TrackedLinkProps extends React.ComponentProps<"a"> {
  event: string;
  eventParams?: Record<string, string>;
}

/** An <a> that reports a Google Analytics event when clicked. */
export default function TrackedLink({
  event,
  eventParams = {},
  ...props
}: Readonly<TrackedLinkProps>) {
  return (
    <a {...props} onClick={() => sendGAEvent("event", event, eventParams)} />
  );
}
