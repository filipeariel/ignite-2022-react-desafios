import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/filipeariel.png" />

      <ProfileDetails>
        <header>
          <h1>Filipe Ariel</h1>

          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Filipe Ariel
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Athon
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            47 Seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
