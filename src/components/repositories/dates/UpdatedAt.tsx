export default function UpdatedAt({ value }: { value: string }) {
  return (
    <p className="updated-at">
      <b>Updated at:</b> {value.substring(0, 10)}
    </p>
  );
}
