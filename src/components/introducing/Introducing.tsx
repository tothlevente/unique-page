import IntroducingProps from "@/interfaces/IntroducingProps";
import Github from "../../assets/icons/github";

import { Button } from "@/components/ui/button";

export default function Introducing({
  name,
  bio,
  avatar_url,
  html_url,
}: IntroducingProps) {
  return (
    <div className="introducing-content">
      <img
        src={avatar_url}
        alt="avatar"
        width="250px"
        height="250px"
        style={{ borderRadius: "50%" }}
      />
      <div className="introducing-text-content">
        <p style={{ fontWeight: "bold", fontSize: "26px" }}>Hi! 👋</p>
        <p>My name is {name}.</p>
        <p>{bio}</p>
        <Button
          asChild
          style={{ margin: "10px" }}
        >
          <a
            href={html_url}
            target="_blank"
          >
            <Github />
            Visit my GitHub page
          </a>
        </Button>
      </div>
    </div>
  );
}
