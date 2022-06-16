import { TagRule } from "./components/1_JsxRule/TagRule";
import {
  Fncomponent_1,
  Fncomponent_2,
} from "./components/2_component/Fncomponent";
import { Classcomponent } from "./components/2_component/Classcomponent";
import { Subject } from "./components/3_props/Subject";
import { SubjectDb } from "./components/3_props/SubjectDb";
import { Homework } from "./components/4_map/Homework";
import { HomeworkDb } from "./components/4_map/HomeworkDb";

const App = () => {
  return (
    <>
      {/* <TagRule /> */}
      {/* <Fncomponent_1 />
      <Fncomponent_2 /> */}

      {/* <Classcomponent /> */}
      {/* <SubjectDb /> */}

      <Homework hdb={HomeworkDb} />
    </>
  );
};

export default App;
