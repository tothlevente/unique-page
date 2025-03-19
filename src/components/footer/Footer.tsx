import packageJson from "package.json";

import ExternalLink from "../../assets/icons/external-link";

import { Button } from "../ui/button";

export default function Footer({ name }: { name: string | undefined }) {
  return (
    <div className="footer">
      <p>This website is open source and licensed under MIT.</p>
      <p>This website is does not use cookies and collect data about you.</p>
      <p>For more information please visit the project repository.</p>
      <p>Thank you for your visiting and intrest! 👍️</p>
      <p>
        Created by {name} in 2024 | v{packageJson.version}
      </p>
      <div className="footer-link">
        <Button asChild>
          <a
            href={import.meta.env.VITE_REPOSITORY}
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLink />
            Repository
          </a>
        </Button>
        <Button asChild>
          <a
            href={import.meta.env.VITE_LICENSE}
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLink />
            License
          </a>
        </Button>
      </div>
    </div>
  );
}
