export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center">
      <img 
        src="/logo.png"
        alt="URBN STYLE Logo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold"><span class="text-foreground">URBN</span> <span class="text-accent">STYLE</span></span>';
        }}
      />
    </a>
  )
}