function userDetails(userId,subjectDetails) {
  console.log("Getting the user details by userId",userId); //API CALL
  subjectDetails({userroll : "678"})
}
function subjectDetails(userRoll,marksDetails) {
  console.log("Getting the subjectDetails by roll no", userRoll); //API CALL
  marksDetails({subjectid : "english"})
}
function marksDetails(subjectId) {
  console.log("getting the marks", subjectId); //API CALL
}
userDetails("123", function(userRoll) {
  subjectDetails(userRoll, function(subjectId) {
    marksDetails(subjectId)
  })
});