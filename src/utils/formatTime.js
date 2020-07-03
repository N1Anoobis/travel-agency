export const formatTime = (param) => {
  if(!param || isNaN(param) || param < 0) return null;

  const sec = String(Math.floor(param%60));
  const min = String(Math.floor((param/60)%60));
  const hrs = String(Math.floor(param/3600));
  return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
};