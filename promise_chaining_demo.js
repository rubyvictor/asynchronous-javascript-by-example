// Simulating an API that returns Promise
const users = {
  get(id) {
    return Promise.resolve({ id, name: "Gordon Song" });
  },
  getMetaDataFor(user) {
    return Promise.resolve({
      user,
      skills: ["java", "javascript", "python", "scala", "clojure"]
    });
  }
};

function getUserSkills(userId) {
  return users
    .get(userId)
    .then(user => {
      throw new Error("error happens when checking user data");
      console.log(`Got user ${JSON.stringify(user)}`);
      return users.getMetaDataFor(user);
    })
    .then(
      userMetaData => {
        console.log(`Got metadata for user ${JSON.stringify(userMetaData)}`);
        return userMetaData.skills;
      },
      error => {
        console.log("I can't handle this error!  Stop propagating!");
        throw error;
      }
    )
    .catch(error => console.error(error));
}

getUserSkills("gordon").then(result => console.log("Result: ", result));

console.log("End of script...");
