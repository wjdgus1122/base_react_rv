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
import { IconEx } from "./components/5_icon/IconEx";
import { Globalstyle } from "./styles/Globalstyle";
import { IconExDb } from "./db";
import { EventEx } from "./components/6_event/EventEx";

const App = () => {
  return (
    <>
      <Globalstyle />
      {/* <TagRule /> */}
      {/* <Fncomponent_1 />
      <Fncomponent_2 /> */}

      {/* <Classcomponent /> */}
      {/* <SubjectDb /> */}

      {/* <Homework hdb={HomeworkDb} /> */}
      {/* <IconEx msdb={IconExDb} /> */}

      <EventEx />
    </>
  );
};

export default App;
