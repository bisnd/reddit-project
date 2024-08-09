import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPostsList = createAsyncThunk(
    "postsList/loadPostsList",

    async () => {
        const response = await fetch("https://www.reddit.com/.json");
        const jsonResponse = await response.json();
    
        const postsListAfterId = jsonResponse.data.after; // The id necessary for pagination on Reddit API
        const postsListJson = jsonResponse.data.children;
    
        const posts = [];
    
        const postsList = {
            after: postsListAfterId,
            posts: posts
        };
    
        postsListJson.forEach((post) => {
            const postData = post.data;
    
            const hasMedia = postData.hasOwnProperty("post_hint"); // True if it has "post_hint" (links, images, videos except for galleries)
            const isGallery = postData.hasOwnProperty("is_gallery"); // True if it has "is_gallery" only present for galleries
            const isLink = postData["post_hint"] === "link";
            const isVideo = postData["post_hint"] === "hosted:video";
    
              // Videos
            let hasAudio;
            let videoUrl;
            let audioUrl;
            
            if (isVideo) {
                hasAudio = (postData.media["reddit_video"]["has_audio"]) === true;
                videoUrl = postData.media["reddit_video"]["fallback_url"];
                audioUrl = videoUrl.replace(/DASH_\d+\.mp4/, 'DASH_AUDIO_128.mp4');
            };
            
            // Galleries
            let galleryArray;
            
            if (isGallery) {
    
                const gallerySources = Object.entries(postData["media_metadata"]).reduce((acc, [mediaId, data]) => {
                    const originalURL = data.s.u;
                    const correctURL = originalURL.replace(/^https:\/\/preview\.redd\.it\/(.+?)\?.*$/, 'https://i.redd.it/$1');
                    acc[mediaId] = correctURL;
                    return acc;
                }, {});
                
                galleryArray = postData["gallery_data"].items.map(item => ({
                    mediaId: item["media_id"],
                    caption: item.caption || "",
                    src: gallerySources[item["media_id"]]
                }));
            };
            
        // Creating the object with the info and format I want
            let postDetails = {
                postType: hasMedia ? postData["post_hint"] : isGallery ? "gallery" : "text",
                id: postData.id, // Id only ex."1e5h8co"
                name: postData.name, // Id + type ex."t3_1e5h8co"
                community: postData.subreddit,
                author: postData.author,
                title: postData.title,
                body: postData.selftext, // need to figure out what to do if links in "selftext"
                score: postData.score,
                likes: null,
                numComments: postData["num_comments"],
                thumbnailHeight: postData["thumbnail_height"], // in "text" posts it's "null"
                url: !hasMedia ? undefined : !isVideo ? postData.url : !hasAudio ? videoUrl : [videoUrl, audioUrl], // If it doesn't have media (text or gallery) undefined, if it's an image or link use "url" property, if it's a video without audio use "videoUrl", if it has audio [videoUrl, audioUrl]
                thumbnailImg: isLink ? postData.preview.images[0].source.url : undefined,
                gallery: isGallery ? galleryArray : undefined, // set "gallery" variable outside or too confusing
            };
            
            posts.push(postDetails);
        
        });
        
        return postsList;
    }
);

/* Need to finish building reducers and extraReducers */
const postsListSlice = createSlice({
    name: "postsList",
    initialState: {
        after: "", // The id necessary for pagination on Reddit API
        isLoading: false,
        error: null, // If error is falsy, then all is good, if it's truthy at least have the error message (action.error.message)
        posts: []
    },
    reducers: {
        updateScore: (state, action) => {
            const { id, voteChange } = action.payload;
            const postToChange = state.posts.find( post => post.id === id);
            if (postToChange) {
                postToChange.score += voteChange; // Has to be "1" if upvote or "-1" if downvote
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostsList.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadPostsList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.after = action.payload.after;
                state.posts = action.payload.posts;
            })
            .addCase(loadPostsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const { updateScore } = postsListSlice.actions;
export default postsListSlice.reducer;

// Fetch function Before
/*
export const loadPostsList = createAsyncThunk(
    "postsList/loadPostsList",

    async () => {
        const response = await fetch("https://www.reddit.com/.json");
        const json = await response.json();

        const postsJSON = json.data.children;

        const postsList = postsJSON.map((post) => {
            const postData = post.data;

            const hasMedia = postData.hasOwnProperty("post_hint"); // True if it has "post_hint" (links, images, videos except for galleries)
            const isGallery = postData.hasOwnProperty("is_gallery"); // True if it has "is_gallery" only present for galleries
            const isLink = postData["post_hint"] === "link";
            const isVideo = postData["post_hint"] === "hosted:video";
            const hasAudio = postData.media["reddit_video"]["has_audio"] === true;

            const videoUrl = postData.media["reddit_video"]["fallback_url"];
            const audioUrl = videoUrl.replace(/DASH_\d+\.mp4/, 'DASH_AUDIO_128.mp4'); // If it's a video, it creates the audio file, otherwise it's null
            
// Need to test if this works correctly
const galleryItemSrc = (id) => postData["media_metadata"][id].s.u;
const galleryArray = postData["gallery_data"].items.map((item) => ({
    mediaId: item["media_id"], 
    caption: item.caption, 
    src: (galleryItemSrc(item["media_id"]))
}));

// Need to check if can return inside a .map()
return {
    id: postData.id, // Id only ex."1e5h8co"
    name: postData.name, // Id + type ex."t3_1e5h8co"
    community: postData.subreddit,
    author: postData.author,
    title: postData.title,
    body: postData.selftext, // need to figure out what to do if links in "selftext"
    score: postData.score,
    likes: null,
    numComments: postData["num_comments"],
    mediaType: hasMedia ? postData["post_hint"] : isGallery ? "gallery" : "text",
    thumbnailHeight: postData["thumbnail_height"], // in "text" posts it's "null"
    url: !hasMedia ? undefined : !isVideo ? postData.url : !hasAudio ? videoUrl : [videoUrl, audioUrl], // If it doesn't have media (text or gallery) undefined, if it's an image or link use "url" property, if it's a video without audio use "videoUrl", if it has audio [videoUrl, audioUrl]
    thumbnailImg: isLink ? postData.preview.images[0].source.url : undefined,
    gallery: isGallery ? galleryArray : undefined, // set "gallery" variable outside or too confusing
}

});

console.log(postsList)

// Also need to check if this works to have both the "after" and the array with the posts
return {
after: json.data.after, // The id necessary for pagination on Reddit API
posts: postsList
}
}
);
*/