
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <main className="bg-gray-700 p-2 rounded-md">
        {children}
        </main>
    </div>
  );
}

export default layout;
