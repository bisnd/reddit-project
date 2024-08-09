// "thumbnail_width" seems to always be 140, so can set it fixed to that, and only get the "thumbnail_height"

const mockTextPostPreview = { // If no "post_hint:" + no "is_gallery"
    postType: "text",
    id: "1e5h8co", 
    name: "t3_1e5h8co",// "name" - otherwise "id: "1e5h8co""
    community: "LabourUK",
    author: "Scattered97",
    title: "How can this party call itself Labour yet refuse to scrap the two-child benefit cap?",
    body: "[**BF \\[31M\\] woke me \\[34F\\] up at 2am to make him dinner; i made him leave instead**](https://www.reddit.com/r/offmychest/comments/1dt4hc3/bf_31m_woke_me_34f_up_at_2am_to_make_him_dinner_i/?utm_source=share&amp;utm_medium=web3x&amp;utm_name=web3xcss&amp;utm_term=1&amp;utm_content=share_button)\n\nI am NOT the Original Poster. That is u/Throwaway347325. She posted in r/offmychest.\n\n# Do NOT comment on Original Posts. Latest update is over a month old.\n\nMood spoiler: &gt;!good for oop!&lt;\n\n**Original post: Monday, July 1, 2024**\n\ni am seriously never dating again. no advice needed, just want to vent. throwaway for the usual reasons.\n\nso i became official with this guy a couple months ago. he was sweet, kind, funny, gorgeous, the usual stuff. everything was fine; we’d stay at each others places, have date nights, general relationship stuff. in short, no red flags; a couple beige ones here and there but everyone has those. then came the other night.\n\nhe’s currently having to pick up the slack at his job due to multiple people quitting. \n\nif/when i do speak to him i’ll update, for now i’m going to bed.\n\n**Update (same post): July 2, 2024 (next day)**\n\nUPDATE: holy sweet jeebus that’s a lot of notifications onto the update! he came into my job to talk and explained that his friends saw a video of a woman being woken up to cook for her man and they decided to test it out on their partners as a ‘loyalty test’ so my initial judgement of him being an idiot was correct. he was surprised when i broke up with him, but he was calm and accepting albeit sad. either way, that's over with. to answer a few concerns:\n\n* nope, no drugs, just bad judgement.\n* no mental health concerns, yes he's stressed but it's surface stress that'll be fine once his work hires some new people i'm sure. honestly? not my concern anymore.\n* someone mentioned unconditional love? the relationship was less than 3 months, chill out.\n\nseriously though, thank you for even taking the time to read my sleepy ramblings. i'm gonna buy myself a nice bottle of wine once i've finished work as a thank you to myself for not settling. until next time!", // "selftext" - Was: "I'm a teacher and on my lunch break. I'm having to take deep breaths to compose myself because I'm so angry and upset about this. "
    score: 91,
    likes: null,
    numComments: 174,
    thumbnailHeight: null,
    url: undefined,
    thumbnailImg: undefined,
    gallery: undefined
    // no "mediaType" ,
    // no need for "url:"
};

const mockLinkPostPreview = { // If 'post_hint: "link"'
    postType: "link",
    id: "1e628vn",
    name: "t3_1e628vn",
    community: "Fauxmoi",
    author: "galaxystars1",
    title: "‘The Acolyte’ Star Manny Jacinto Got All of His Lines Cut From ‘Top Gun: Maverick’: ‘It Wasn’t Shocking to Me … Tom Cruise Is Writing Stories for Tom Cruise’",
    body: "", // "selftext"
    score: 984,
    likes: null,
    numComments: 110,
    thumbnailHeight: 78,
    url: "https://variety.com/2024/film/news/manny-jacinto-top-gun-maverick-dialogue-cut-the-acolyte-1236075752/?fbclid=IwZXh0bgNhZW0CMTEAAR2DwXzS3M3MuU87ueWZzJyOoRSBwye1YYk6AWE5kN5pgZaqZYl2B-gTm-Y_aem_J4RdmUW8OlxR2b6BdRr_JA",
    thumbnailImg: "https://external-preview.redd.it/YW8gffwL2oDjh-yVP8uKOXbMYUQc6ZRc7blBz0PHNe4.jpg?auto=webp&s=87a82800ac7ed684c4930818c8b505be2e5e9d30", // "preview.images[0].source.url"
    gallery: undefined
    // thumbnail_width: 140,
};

const mockImagePostPreview = { // If 'post_hint: "image"'
    postType: "image",
    id: "1e68vcv",
    name: "t3_1e68vcv",
    community: "formula1",
    author: "TheAwesomeGenius",
    title: "ESPN ranks Michael Schumacher as the 29th greatest pro athlete of the 21st century",
    body: "",
    score: 309,
    likes: null,
    numComments: 253,
    thumbnailHeight: 91,
    url: "https://i.redd.it/67k5iajcg9dd1.png",
    thumbnailImg: undefined,
    gallery: undefined,
    // thumbnail_width: 140,
};

const mockGalleryPostPreview = { // If no "post_hint:" + "is_gallery: true"
    postType: "gallery",// no "mediaType" property
    id: "1e5qe2h",
    name: "t3_1e5qe2h",
    community: "illustrativeDNA",
    author: "Nvrrensi",
    title: "Sardinian results",
    body: "",
    score: 36,
    likes: null,
    numComments: 15,
    thumbnailHeight: 130,
    url: undefined, // no need for "url:" ,
    // thumbnail_width: 140,
    gallery: [
        {
            mediaId: "otv1b7v6n4dd1", 
            caption: "", 
            src: "https://i.redd.it/otv1b7v6n4dd1.jpg"
        }, // "media_id" + "caption" (+ order) --> "gallery_data.items[]" (an object per image). "url" --> "media_metadata.[media_id].s.u"
        {
            mediaId: "aiqlezx6n4dd1", 
            caption: "", 
            src: "https://i.redd.it/aiqlezx6n4dd1.jpg"
        }, 
    ],
};

const mockGifPostPreview = { // If 'post_hint: "image"' can treat as image. If 'post_hint: "hosted:video"' + 'media.reddit_video.is_gif: true'
    postType: "image",
    id: "1e2nd1r",
    name: "t3_1e2nd1r",
    community: "gif",
    author: "BigBenIsTicking",
    title: "The next 6 months in America",
    body: "",
    score: 227,
    likes: null,
    numComments: 11,
    thumbnailHeight: 105,
    url: "https://i.redd.it/pg8c9h0s9dcd1.gif", // if 'post_hint: "image"' can use standard "url" as a normal image. If 'post_hint: "hosted:video" check if `media.reddit_video.is_gif: true` and use `media.reddit_video.fallback_url`
    // thumbnail_width: 140,
    thumbnailImg: undefined,
    gallery: undefined
};

const mockVideoPostPreview = { // If 'post_hint: "hosted:video"' + either 'media.reddit_video.has_audio: true' or 'media.reddit_video.is_gif: false'
    postType: "hosted:video",
    id: "1e5xtcy",
    name: "t3_1e5xtcy",
    community: "travisandtaylor",
    author: "nsfwdarling",
    title: "Taylor predicted reputation? ",
    body: "I’ve always wondered why Taylor mentioned snakes at the VMA’s 2014 if the Kim and Kanye call happened around 2016. There’s others snakes easter eggs in the 1989 album, like in the Shake It Off video. Seems like her whole career is scripted. Coincidence or not? ",
    score: 381,
    likes: null,
    numComments: 81,
    thumbnailHeight: 140,
    url: ["https://v.redd.it/poi7n2q476dd1/DASH_480.mp4", "https://v.redd.it/poi7n2q476dd1/DASH_AUDIO_128.mp4"], // "[videoUrl, audioUrl]". "videoUrl" --> "media.reddit_video.fallback_url". "audioUrl" --> take "videoUrl" and replace "/DASH_\d+\.mp4/" with "DASH_audio.mp4". Will then use <ReactPlayer/> with attribute "url=url"/"url=[videoUrl, audioUrl]" --> It doesn't actually combine them, solution is more complicated
    // thumbnail_width: 140,
    thumbnailImg: undefined,
    gallery: undefined
};

export const mockPostsList = {
    after: "t3_1e5xtcy", // the "name" of the last post
    posts: [mockTextPostPreview, mockLinkPostPreview, mockImagePostPreview, mockGalleryPostPreview, mockGifPostPreview, mockVideoPostPreview]
};

export const mockComment = {
    id: "t1_ldq2eeq", // "name"
    author: "Comfortable-Load-904",
    parent_id: "t3_1e628vn",
    body: "![gif](giphy|3o6fJ3KsnV9qDXsk36) That is exactly true, that cultist doesn’t like sharing the screen with people more magnetic than him and that’s why he is pushing Glenn Powell as hard as he is. Glen Powell seems nice but isn’t charismatic and so won’t outshine him. Manny is charismatic and has a magnetism on screen that is undeniable. If I had to choose between Tom Cruise and Manny Jacinto, who is choosing Tom?",
    score: 580,
    likes: null,
    depth: 0,
    url: "https://external-preview.redd.it/YcjSuBxVzNDHqUXZMlO1ej4Vj6rfvgkoAKoaaSR9uPA.gif?width=200&height=200&s=572014adc97fbda939a3f48770eb2e24fdc76ad0", // 1. Save "media_metadata": "const media = response[1].data.children[i].data.media_metadata". 2. Get the key/media_id (only one): "const media_id = imgObject.keys(media)[0]". 3. Get the url: "media[media_id].s" and either ".gif" or ".u" (img)
    replies: [
        {
            id: "t1_ldq7rxj",
            author: "IceStorm22",
            parent_id: "t1_ldq2eeq",
            body: "I wonder how many boxes he had to stand on while sharing scenes with 6’ tall Glen Powell… https://preview.redd.it/rbp43ovmm7dd1.jpeg?width=278&format=pjpg&auto=webp&s=9ee31a3f2c2a70eb15f73b7c41fb85e019dee008",
            score: 141,
            likes: null,
            depth: 1,
            url: "https://preview.redd.it/rbp43ovmm7dd1.jpeg?width=278&format=pjpg&auto=webp&s=9ee31a3f2c2a70eb15f73b7c41fb85e019dee008", // Will only have "url" if API response had "media_metadata" property
            replies: [
                {
                    id: "t1_ldqa3ww",
                    author: "leni710",
                    parent_id: "t1_ldq7rxj",
                    body: "What in the fresh hell is this!?!?! In a world where you can be any type of Tom, be a Tom Holland. Spiderman does not care that he's shorter than Zendaya. A good friend of mine is about 5'10\" and her boyfriend is probably 5'4\" since he's the same height as her teen daughter. He seems pretty darn happy to be in her life and does not act weird about the height thing.",
                    score: 69,
                    likes: null,
                    depth: 2,
                    // no "url:" ,
                    replies: []
                },
            ]
        },
        {
            id: "t1_ldq53vn",
            author: "HeyltsYouMcMuffin",
            parent_id: "t1_ldq2eeq",
            body: "If you think Glen Powell isn’t charismatic, you haven’t seen him in the right things! He can be very charming. However, I think Glen is more likely to “drink the kool-aid,” which might be why Tom Cruise seems to be buddy buddy with him unfortunately ",
            score: 303,
            likes: null,
            depth: 1,
            // no "url:" ,
            replies: [
                {
                    id: "t1_ldq92uo",
                    author: "baddadjokesminusdad",
                    parent_id: "t1_ldq53vn",
                    body: "I wonder if he’s recruiting glen.",
                    score: 108,
                    likes: null,
                    depth: 2,
                    // no "url:" ,
                    replies: [
                        {
                            id: "t1_ldqnovx",
                            author: "kidult33",
                            parent_id: "t1_ldq92uo",
                            body: "I’m pretty sure I read a comment in one of the recent posts about Glen Powell, that his ex broke up with him because Tom Cruise was recruiting him during the filming of TG:M.",
                            score: 47,
                            likes: null,
                            depth: 3,
                            // no "url:" ,
                            replies: ""
                        },
                    ]
                },
            ]
        }
    ], // If no replies 'replies: ""'
};