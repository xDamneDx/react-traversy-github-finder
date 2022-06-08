import PropTypes from "prop-types";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card gb-base-100">
      <div className="card-body">
        <h2 className="my-4 text-3xl font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <h3>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
