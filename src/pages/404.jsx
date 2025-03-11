function NotFound() {
  return (
    <div className="home-container container mx-auto my-8 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        Página no encontrada
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="h-full flex">
            <img src="https://i.imgur.com/8K0uRd8.png" alt="404" />
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="blog-miniatures-wrapper w-full p-4 rounded-lg shadow-md flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">
              Parece que has perdido tu camino
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
