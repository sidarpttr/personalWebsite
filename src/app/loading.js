export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-neutral-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
                </div>
                
                {/* Loading Text */}
                <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-medium">Loading</span>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
