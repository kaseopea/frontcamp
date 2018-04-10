import PlipsList from '../js/components/PlipList/PlipsList';
import App from '../js/appComponent';

describe('A suite', () => {
  // it('should render without throwing an error', function() {
  //   expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  // });

  it('should be selectable by class "foo"', () => {
    const element = shallow(<App />);
    console.log(element);
    expect(element.is('.plips-list')).toBe(true);
  });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<Foo />).find('.foo').length).toBe(1);
  // });
  //
  // it('should render to static HTML', function() {
  //   expect(render(<Foo />).text()).toEqual('Bar');
  // });
});