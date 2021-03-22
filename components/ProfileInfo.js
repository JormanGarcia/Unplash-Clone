import { ST } from "next/dist/next-server/lib/utils";
import Style from "../styles/profile.module.css";

export default function ProfileInfo({ user }) {
  return (
    <>
      <div className={Style.profile}>
        <img src={user.profile_image.large} className={Style.profile_photo} />
        <div className={Style.user_info}>
          <div className={Style.username}>{user.name}</div>
          <div className={Style.bio}>{user.bio}</div>

          <div className={Style.portfolio}>
            <a href={user.portfolio_url}>{user.portfolio_url}</a>
          </div>
          {user.tags.custom.length === 0 ? null : (
            <div>
              <p className={Style.interest}>Interest</p>

              <div className={Style.interest_container}>
                {user.tags.custom.map((tag) => (
                  <div className={Style.tag} key={tag.title}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={Style.divisor}>
        <div className={Style.total_photos}>Photos {user.total_photos}</div>
      </div>
    </>
  );
}
