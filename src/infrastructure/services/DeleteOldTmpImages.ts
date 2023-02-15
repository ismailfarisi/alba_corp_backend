import findRemoveSync from "find-remove";

const result = () =>findRemoveSync('/tmp', {
    age: { seconds: 300 },
    limit: 100
  })



  setInterval(result, 1000 * 60 );

  export default result;