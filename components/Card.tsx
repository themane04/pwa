export type CardProps = {
  title: string
  description: string
  picture: string
  tags: string[]
};

const Card: React.FC<CardProps> = ({ title, description, picture, tags }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={picture} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ title }</div>
        <p className="text-gray-700 text-base">
          { description }
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, i) => 
          <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            { tag }
          </span>
        )}
      </div>
    </div>
  );
}

export default Card