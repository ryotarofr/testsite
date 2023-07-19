import getContentsByTitle from "@/actions/getContentsByTitle";
import SearchInput from '@/components/SearchInput';
import SearchContent from './components/SearchContent';


export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

const Search = async ({ searchParams }: SearchProps) => {
  const contents = await getContentsByTitle(searchParams.title);

  return (
    <div
      className="
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <div className="mb-2 flex flex-col gap-y-6">
        <h1 className="text-white text-3xl font-semibold">
          検索
        </h1>
        <SearchInput />
      </div>
      <SearchContent contents={contents} />
    </div>
  );
}

export default Search;
