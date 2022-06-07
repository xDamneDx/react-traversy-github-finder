import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 text-black bg-gray-200 input input-lg"
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
