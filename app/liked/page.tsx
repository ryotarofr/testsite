import getLikedContents from "@/actions/getLikedContents"
import LikedContent from './components/LikedContent';

export const revalidate = 0

const Liked = async () => {
  const contents = await getLikedContents()

  return (
    <div
      className="
        rounded-lg 
        h-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <div className="mt-20">
        <div
          className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
        >
          {/* <div className="relative h-32 w-32 lg:h-44 lg:w-44"> */}
          {/* <Image
                className="object-cover"
                fill
                src="/images/liked.png"
                alt="Playlist"
              /> */}
          {/* </div> */}
          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <p className="hidden md:block font-semibold text-sm">
              Playlist
            </p>
            <h1
              className="
                  text-white 
                  text-2xl 
                  sm:text-4xl 
                  lg:text-5xl 
                  font-bold
                "
            >
              いいねしたコンテンツ
            </h1>
          </div>
        </div>
      </div>
      <LikedContent contents={contents} />
    </div>
  )
}

export default Liked