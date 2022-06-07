import { FaCodepen, FaStore, FaUserFriends, FaUser } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

// Components:
import Spinner from "../components/layout/Spinner";

function User() {
  const { getUser, user, loading } = useContext(GithubContext);
  const { login: username } = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(username);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    user && (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back to Search
            </Link>
          </div>
          <div className="grid grid-cols-1 mb-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
            <div className="mb-6 custom-card-image md:mb-0">
              <div className="flex rounded-lg shadow-xl card image-full">
                <figure>
                  <img src={avatar_url} alt="User avatar" />
                </figure>
                <div className="justify-end card-body">
                  <h2 className="mb-0 card-title">{name}</h2>
                  <p className="flex-grow-0">{login}</p>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default User;
