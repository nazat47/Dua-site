const loading = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen p-4">
      <div className="flex gap-4">
        <div className="w-[500px] h-[90vh] bg-white rounded-xl p-4">
          {[...Array(5)].map((_, i) => (
            <div
              className="flex my-4 gap-4 items-center justify-center w-full animate-pulse"
              key={i}
            >
              <div className="size-12 rounded-lg  bg-gray-200"></div>
              <div className="w-full h-[30px] bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
        <div className="w-full h-screen bg-white rounded-xl p-4">
          <div className="flex flex-col items-center justify-center animate-pulse space-y-4">
            <div className="w-full h-[50px] bg-gray-200 rounded-lg"></div>
            <div className="w-full h-[200px] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
