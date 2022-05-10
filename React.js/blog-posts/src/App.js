import SingleComment from "./SingleComment";
import profile1 from "./image/arthur.jpg";
import profile2 from "./image/ford.jpg";
import profile3 from "./image/trillian.jpg";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>Zaphod Beeblebrox wants to join.</div>
      </UserCard>
      <UserCard>
        <SingleComment
          fullname="Arthur Dent"
          name="Arthur"
          date="Today at 5:00pm"
          quote="Is there any tea on this spaceship?"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          fullname="Ford Prefect"
          name="Ford"
          date="Today at 6:00pm"
          quote="Don't panic, Arthur. Check the Guide."
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          fullname="Tricia McMillian"
          name="Trillian"
          date="Today at 7:00pm"
          quote="Have you seen my mice?"
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

export default App;
