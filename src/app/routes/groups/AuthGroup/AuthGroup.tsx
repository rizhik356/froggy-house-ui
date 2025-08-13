import {AuthWrapper} from "../../../wrappers/AuthWrapper";
import {Login} from "../../../../modules/Auth";
import {paths} from "../../../../constants";

const AuthGroup = () => {
    return [
        {element: <AuthWrapper />, children: [
                {element: <Login />, path: paths.AUTH.LOGIN}
            ]}
    ]
}

export default AuthGroup;
