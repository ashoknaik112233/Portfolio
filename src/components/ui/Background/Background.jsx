import './Background.css';

// Fixed decorative layer: subtle grid + coloured blobs that the glass blurs over.
export default function Background() {
  return (
    <div aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />
    </div>
  );
}
