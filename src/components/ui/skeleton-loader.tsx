import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-background w-full overflow-hidden pointer-events-none select-none">
      
      {/* Navbar Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-black/5 dark:border-white/5 bg-background/50">
        <Skeleton className="h-8 w-32 rounded-lg" />
        <div className="hidden md:flex items-center gap-8">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-28 rounded-full hidden md:block" />
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 pb-24">
          <div className="flex flex-col gap-6">
            <Skeleton className="h-8 w-48 rounded-full" accent />
            
            <div className="space-y-4">
              <Skeleton className="h-14 md:h-16 w-full rounded-2xl" />
              <Skeleton className="h-14 md:h-16 w-11/12 rounded-2xl" />
              <Skeleton className="h-14 md:h-16 w-4/5 rounded-2xl" />
            </div>

            <div className="space-y-3 mt-4">
              <Skeleton className="h-5 w-full max-w-md rounded-lg" />
              <Skeleton className="h-5 w-5/6 max-w-md rounded-lg" />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Skeleton className="h-14 w-40 rounded-full" accent />
              <Skeleton className="h-14 w-32 rounded-full" />
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center w-full max-w-md mx-auto lg:max-w-none">
            <Skeleton className="w-full max-w-md aspect-[4/5] rounded-3xl" />
          </div>
        </div>

        {/* Marquee Skeleton */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/50 backdrop-blur-sm py-3">
          <div className="flex w-max">
            <div className="flex gap-12 justify-center items-center px-8">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-24 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* About Section Skeleton */}
      <section className="py-24 container mx-auto px-6 w-full max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-48 mb-8 rounded-2xl" />
          
          <div className="space-y-4 mb-16 pl-6 border-l-4 border-zinc-200 dark:border-zinc-800">
            <Skeleton className="h-6 w-full rounded-lg" />
            <Skeleton className="h-6 w-11/12 rounded-lg" />
            <Skeleton className="h-6 w-4/5 rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-3xl" />
            ))}
          </div>

          <Skeleton className="h-10 w-40 mb-12 mx-auto rounded-xl" />
          
          {/* Timeline Skeleton */}
          <div className="relative max-w-2xl mx-auto space-y-16">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />
            
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <Skeleton className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full -translate-x-1/2 shrink-0 z-10 border-4 border-background" accent />
                
                <div className={`w-full pl-20 md:pl-0 md:w-[45%] flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <Skeleton className="h-6 w-20 rounded-full mb-4" accent />
                  <Skeleton className="h-8 w-64 rounded-xl mb-3" />
                  <Skeleton className="h-4 w-full rounded-md mb-2" />
                  <Skeleton className="h-4 w-5/6 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="py-24 container mx-auto px-6 w-full max-w-7xl bg-zinc-50 dark:bg-zinc-950/50 rounded-3xl mb-12">
        <Skeleton className="h-12 w-56 mb-12 mx-auto rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, colIdx) => (
            <div key={colIdx} className="space-y-6">
              <Skeleton className="h-8 w-32 rounded-lg" />
              <div className="flex flex-wrap gap-4">
                {[...Array(5)].map((_, itemIdx) => (
                  <Skeleton key={itemIdx} className="h-16 w-16 rounded-2xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="py-24 container mx-auto px-6 w-full max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <Skeleton className="h-12 w-64 rounded-2xl" />
          <Skeleton className="h-6 w-32 rounded-full hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
              <Skeleton className="aspect-video w-full rounded-none" />
              <div className="p-8 space-y-6">
                <Skeleton className="h-8 w-2/3 rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-5/6 rounded-md" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" accent />
                  <Skeleton className="h-6 w-24 rounded-full" accent />
                  <Skeleton className="h-6 w-16 rounded-full" accent />
                </div>
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-10 w-32 rounded-lg" />
                  <Skeleton className="h-10 w-32 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-24 container mx-auto px-6 w-full max-w-7xl">
        <Skeleton className="h-12 w-64 mx-auto mb-16 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
              <Skeleton className="h-16 w-16 rounded-full mb-6" accent />
              <Skeleton className="h-8 w-48 rounded-xl mb-4" />
              <Skeleton className="h-6 w-full rounded-md mb-2" />
              <Skeleton className="h-6 w-5/6 rounded-md mb-8" />
              
              <div className="space-y-4 mb-8">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="h-5 w-5 rounded-full shrink-0" />
                    <Skeleton className="h-4 w-full rounded-md" />
                  </div>
                ))}
              </div>
              
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* AI Chat Section Skeleton */}
      <section className="py-24 container mx-auto px-6 w-full max-w-7xl">
        <Skeleton className="h-12 w-72 mx-auto mb-12 rounded-2xl" />
        <div className="max-w-4xl mx-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 h-[600px] flex flex-col p-6 overflow-hidden">
          <div className="flex-1 space-y-6">
            {/* Assistant Message */}
            <div className="flex gap-4 items-start">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" accent />
              <div className="space-y-2 max-w-[80%] w-full">
                <Skeleton className="h-12 w-3/4 rounded-2xl rounded-tl-sm" />
              </div>
            </div>
            {/* User Message */}
            <div className="flex gap-4 items-start justify-end">
              <div className="space-y-2 max-w-[80%] w-full flex flex-col items-end">
                <Skeleton className="h-12 w-1/2 rounded-2xl rounded-tr-sm" />
              </div>
              <Skeleton className="h-10 w-10 rounded-full shrink-0" />
            </div>
            {/* Assistant Message */}
            <div className="flex gap-4 items-start">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" accent />
              <div className="space-y-2 max-w-[80%] w-full">
                <Skeleton className="h-20 w-full rounded-2xl rounded-tl-sm" />
              </div>
            </div>
          </div>
          {/* Input Area */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-6 relative">
            <Skeleton className="h-14 w-full rounded-full" />
            <Skeleton className="absolute right-2 top-8 h-10 w-10 rounded-full" accent />
          </div>
        </div>
      </section>
    </div>
  );
}
