export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-20 px-6 container mx-auto bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="space-y-8 w-full">
          {/* Badge Skeleton */}
          <div className="w-48 h-8 bg-white/5 rounded-full animate-pulse border border-white/5" />
          
          {/* Heading Skeletons */}
          <div className="space-y-4">
            <div className="w-full h-16 md:h-20 bg-white/5 rounded-2xl animate-pulse" />
            <div className="w-4/5 h-16 md:h-20 bg-white/5 rounded-2xl animate-pulse" />
          </div>
          
          {/* Paragraph Skeleton */}
          <div className="space-y-3">
            <div className="w-full h-6 bg-white/5 rounded-lg animate-pulse" />
            <div className="w-5/6 h-6 bg-white/5 rounded-lg animate-pulse" />
            <div className="w-2/3 h-6 bg-white/5 rounded-lg animate-pulse" />
          </div>
          
          {/* Buttons Skeleton */}
          <div className="flex gap-4 pt-4">
            <div className="w-48 h-14 bg-white/10 rounded-full animate-pulse" />
            <div className="w-36 h-14 bg-white/5 rounded-full animate-pulse border border-white/10" />
          </div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="w-full max-w-md aspect-[4/5] bg-white/5 rounded-3xl animate-pulse border border-white/10" />
        </div>
      </div>
    </div>
  );
}
