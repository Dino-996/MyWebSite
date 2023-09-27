const url: string = "http://sito.it";
const auth: string = "hello";

const options: object = {
  headerd: {
    Authorization: auth,
  },
};

fetch(url, options)
  .then((res) => res.blob())
  .then((blob) => {
    const file = window.URL.createObjectURL(blob);
    window.location.assign(file);
  });

export default fetch;
