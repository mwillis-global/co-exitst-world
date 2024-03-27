// Define constants
const settings = {
  channelslug: "other-earth-online-feed",
};
const queryOptions = {
  page: 0,
  direction: "desc",
  sort: "position",
  per: 6,
};

// Define variables
const posts = [];
let loading = false;

// Use arrow functions
const nextPage = () => {
  queryOptions.page++;
  loadPosts(buildQuery());
};

const buildQuery = () => {
  return `https://api.are.na/v2/channels/${settings.channelslug}/contents?${$.param(queryOptions)}`;
};

const loadPosts = (url) => {
  // DOM manipulation and API request logic
  $("#loading").removeClass("not-visible").addClass("is-visible");

  // Use async/await for the API request
  $.getJSON(url)
    .done((response) => {
      // Handle the API response
      const { contents } = response;
      for (const post of contents) {
        addPost(post);
      }
      loading = false;
      $("#loading").removeClass("is-visible").addClass("not-visible");
    })
    .fail((jqxhr, textStatus, error) => {
      console.log(jqxhr, textStatus, error);
      console.log(jqxhr.statusCode());
      $("#loading").text(`${textStatus}, ${error}`);
    });
};

const addPost = (post) => {
  const template = getTemplate("#postTemplate");
  template.attr("id", post.id);
  const mediacontainer = $("#mediacontainer", template);

  switch (post["class"]) {
    case "Image":
      mediacontainer.html(addImagePost(post));
      break;
    case "Text":
      mediacontainer.html(addTextPost(post));
      break;
    case "Media":
      mediacontainer.html(addMediaPost(post));
      break;
    case "Link":
      mediacontainer.html(addLinkPost(post));
      break;
    default:
      console.log("unknown post type", post["class"], post);
  }

  posts.push(post);
  $("#posts-container").append(template);
};

const addImagePost = (post) => {
  const imageTemplate = getTemplate("#imageTemplate");
  if (post.generated_title !== "Untitled") {
    $("#post-title", imageTemplate).html(post.generated_title);
  }
  $("#post-desc", imageTemplate).html(post.description_html);
  $("a.hyperlink", imageTemplate).attr("href", `https://www.are.na/block/${post.id}`);
  $("img", imageTemplate).attr("src", post.image.original.url);
  return imageTemplate;
};

const addTextPost = (post) => {
  const textTemplate = getTemplate("#textTemplate");
  if (post.generated_title !== "Untitled") {
    $("#post-title", textTemplate).text(post.generated_title);
  }
  $("a.hyperlink", textTemplate).attr("href", `https://www.are.na/block/${post.id}`);
  $("#post-content", textTemplate).html(post.content_html);
  return textTemplate;
};

const addMediaPost = (post) => {
  const mediaTemplate = getTemplate("#mediaTemplate");
  if (post.generated_title !== "Untitled") {
    $("#post-title", mediaTemplate).html(post.generated_title);
  }
  $("#post-desc", mediaTemplate).html(post.description_html);
  $("#post-content", mediaTemplate).html(post.embed.html);
  $("a", mediaTemplate).attr("href", post.source.url);
  $("#post-source", mediaTemplate).html(post.source.url);
  return mediaTemplate;
};

const addLinkPost = (post) => {
  const template = getTemplate("#linkTemplate");
  if (post.generated_title !== "Untitled") {
    $("#post-title", template).html(post.generated_title);
  }
  $("#post-desc", template).html(post.description_html);
  $("a", template).attr("href", post.source.url);
  $("img", template).attr("src", post.image.display.url);
  $("#post-source", template).html(post.source.url);
  return template;
};

const getTemplate = (type) => {
  const template = $(type).clone();
  return template.attr("id", null);
};

// Event listener using an arrow function
window.addEventListener("scroll", (e) => {
  if (posts.length) {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height();
    const winHeight = $(window).height();
    const dif = docHeight - winHeight;
    if (scrollTop > dif - winHeight * 2) {
      if (!loading) {
        loading = true;
        nextPage();
      }
    }
  }
});

// jQuery DOM ready handler
$(function () {
  nextPage();
});
