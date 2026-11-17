import { NextStudio, metadata as studioMetadata, viewport } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const metadata = { ...studioMetadata, robots: { index: false, follow: false } };
export { viewport };
export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
