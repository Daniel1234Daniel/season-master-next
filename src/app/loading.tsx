export default function Loading() {
  return (
    <div className="flex bg-white dark:bg-[#292a2d] min-h-screen items-center justify-center" role="status">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-3 h-3 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  )
}