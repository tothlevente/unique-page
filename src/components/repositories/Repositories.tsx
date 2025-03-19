import RepositoryProps from "@/interfaces/RepositoryProps";
import Github from "../../assets/icons/github";
import Globe from "../../assets/icons/globe";
import IsTemplate from "./badges/IsTemplate";
import IsArchived from "./badges/IsArchived";
import CreatedAt from "./dates/CreatedAt";
import UpdatedAt from "./dates/UpdatedAt";
import Topics from "./badges/Topics";

import { Button } from "@/components/ui/button";

export default function Repositories({
  repositories,
}: {
  repositories: RepositoryProps[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1500px",
        justifySelf: "center",
      }}
    >
      {repositories.map((value, index) => (
        <div
          key={index}
          className="repository-card"
        >
          <div className="repository-card-header">
            <p className="repository-card-title">{value.name}</p>
            <p>{value.description}</p>
          </div>
          <div>
            <div className="repository-card-badge">
              <IsTemplate value={value.is_template} />
              <IsArchived value={value.archived} />
              <Topics topics={value.topics} />
            </div>
            <div className="repository-card-items">
              <div>
                <CreatedAt value={value.created_at} />
                <UpdatedAt value={value.updated_at} />
              </div>
              <div>
                <Button asChild>
                  <a
                    href={value.html_url}
                    target="_blank"
                  >
                    <Github />
                  </a>
                </Button>
                {value.homepage ? (
                  <Button asChild>
                    <a
                      href={value.homepage}
                      target="_blank"
                      style={{ marginLeft: "8px" }}
                    >
                      <Globe />
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
