import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background w-full overflow-hidden">
      {/* Navbar Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-black/5 dark:border-white/5 bg-background/50">
        <Skeleton className="h-8 w-40" />
        <div className="hidden md:flex gap-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-full hidden md:block" />
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="pt-40 pb-20 px-6 container mx-auto flex flex-col items-center justify-center text-center">
        <Skeleton className="h-10 w-48 mb-8 rounded-full" accent />
        <Skeleton className="h-16 md:h-20 w-3/4 max-w-3xl mb-6" />
        <Skeleton className="h-16 md:h-20 w-2/3 max-w-2xl mb-8" />
        <Skeleton className="h-6 w-full max-w-xl mb-12" />
        
        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full justify-center">
          <Skeleton className="h-14 w-full sm:w-48 rounded-full" accent />
          <Skeleton className="h-14 w-full sm:w-48 rounded-full" />
        </div>

        {/* Marquee area skeleton */}
        <div className="w-full h-12 flex gap-8 justify-center overflow-hidden opacity-50">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-32 hidden md:block" />
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-24 border-y border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <Skeleton className="h-12 w-48 mb-6" />
          <Skeleton className="h-6 w-full mb-3" />
          <Skeleton className="h-6 w-full mb-3" />
          <Skeleton className="h-6 w-3/4 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>

          <Skeleton className="h-10 w-40 mx-auto mb-16" />
          <div className="max-w-2xl mx-auto space-y-16">
            <div className="flex gap-8 items-center">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" accent />
              <div className="w-full space-y-3">
                <Skeleton className="h-4 w-20 rounded-full" accent />
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <div className="flex gap-8 items-center flex-row-reverse text-right">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" accent />
              <div className="w-full space-y-3 flex flex-col items-end">
                <Skeleton className="h-4 w-20 rounded-full" accent />
                <Skeleton className="h-6 w-64" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Skeleton className="h-12 w-64 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="flex gap-2 pt-4">
                    <Skeleton className="h-6 w-16 rounded-full" accent />
                    <Skeleton className="h-6 w-20 rounded-full" accent />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
