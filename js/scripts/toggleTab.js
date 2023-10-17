export const togglePhotoTab = (photo_review, video_review, photo_container, video_container) => {
    if (video_review.classList.contains("mediareviews__btn-active")) {
        photo_review.classList.toggle("mediareviews__btn-active");
        video_review.classList.toggle("mediareviews__btn-active");
        photo_container.classList.toggle("mediareviews__container-active");
        video_container.classList.toggle("mediareviews__container-active");
    }
}
export const toggleVideoTab = (photo_review, video_review, photo_container, video_container) => {
    if (photo_review.classList.contains("mediareviews__btn-active")) {
        photo_review.classList.toggle("mediareviews__btn-active");
        video_review.classList.toggle("mediareviews__btn-active");
        photo_container.classList.toggle("mediareviews__container-active");
        video_container.classList.toggle("mediareviews__container-active");
    }
}