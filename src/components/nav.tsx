import Search from './search';

export default function Nav() {
  return (
    <div className="fixed" style={{
      paddingLeft: '300px'
    }}>
      <div className="">Nav</div>
      <Search />
    </div>
  );
}
