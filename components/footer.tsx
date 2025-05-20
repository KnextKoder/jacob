import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // No longer needed
import { Separator } from "@/components/ui/separator";
import {
  // DribbbleIcon, // Removed
  GithubIcon,
  // TwitchIcon, // Removed
  TwitterIcon,
  MailIcon, // Added for email
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "mailto:oau@studentenergy.org",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              <p className="font-semibold text-3xl">Student Energy OAU</p>
              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Us Section */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold">Ready to Join?</h6>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready to shape the future? Fill the form, join our WhatsApp group,
                and welcome aboard!
              </p>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdDyghan6zmO1nxUy8nSApcLbnZVHz5C5jvzCy1h0LtJJ8jxg/viewform?usp=sf_link"
                target="_blank"
                className="mt-4"
              >
                <Button type="submit">Join via Google Form</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Student Energy OAU
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="mailto:oau@studentenergy.org">
                <MailIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
