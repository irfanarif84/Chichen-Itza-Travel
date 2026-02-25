import { Link, type LinkProps } from "react-router-dom";
import { useLocale } from "@/lib/i18n/useLocale";
import { forwardRef } from "react";

/**
 * Locale-aware Link component that auto-prefixes paths for the current locale.
 * Use this instead of react-router-dom's Link in all page content.
 */
const LocaleLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { localePath } = useLocale();
    const to = typeof props.to === "string" ? localePath(props.to) : props.to;
    return <Link {...props} ref={ref} to={to} />;
  }
);

LocaleLink.displayName = "LocaleLink";

export { LocaleLink };
export default LocaleLink;
