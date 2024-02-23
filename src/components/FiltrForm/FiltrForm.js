import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
// import {editProfilShema, toastError} from "components/Helpers";

import {Formik, Form, Field} from "formik";

export const FiltrForm = () => {
  //  const [avatar, setAvatar] = useState(null);
  //  const [userAvatarURL, setUserAvatarURL] = useState(null);
  //  const dispatch = useDispatch();
  //  const {user} = useAuth();
  //  const {name, email, thema: activeUserTheme, avatarURL} = user;
  //  const [showPassword, setShowPassword] = useState(false);
  //  const togglePasswordVisibility = () => {
  //    setShowPassword(!showPassword);
  //  };

  //  useEffect(() => {
  //    if (avatar) {
  //      const avatarObjectURL = URL.createObjectURL(avatar);
  //      setUserAvatarURL(avatarObjectURL);

  //      return () => URL.revokeObjectURL(avatarObjectURL);
  //    }
  //  }, [avatar]);

  //  const handleFileChange = ({target}) => {
  //    if (!target.files) {
  //      toastError("Please select image");
  //      return;
  //    }
  //    const file = target.files[0];

  //    if (file && file instanceof File && file.type.startsWith("image/")) {
  //      setAvatar(file);
  //    } else {
  //      toastError("Bad type file");
  //      target.value = "";
  //      setUserAvatarURL(avatarURL);
  //      setAvatar(null);
  //      target.click();
  //    }
  //  };
  const handleSubmit = (values, actions) => {
    //    values.avatarURL = avatar || userAvatarURL || user.avatarURL;
    //    dispatch(changeUserInfo(values));
    //    stateСhangeModal();
    //    actions.resetForm({password: ""});
  };

  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",

        // avatarURL: null,
        // name: name,
        // email: email,
        // password: "",
      }}
      // validationSchema={editProfilShema}
      onSubmit={async (values, actions) => {
        handleSubmit(values, actions);
      }}>
      <Form>
        <label htmlFor="brand">
          Car brand
          <Field name="brand" placeholder="Enter the text" />
        </label>

        <label htmlFor="price">
          Price/ 1 hour
          <Field id="lastName" name="price" placeholder="To $" type="number" />
        </label>

        <label htmlFor="mileageFrom">
          From
          <Field
            id="mileageFrom"
            name="mileageFrom"
            placeholder=""
            type="number"
          />
        </label>
        <label htmlFor="mileageTo">
          From
          <Field id="mileageTo" name="mileageTo" placeholder="" type="number" />
        </label>

        <button type="submit">Search</button>
      </Form>

      {/* <StyledForm>
        <Title>Edit profile</Title>

        <LabelBox>
          <LabelStyle>
            <BlockLogoStyles>
              <ImgStyled
                src={userAvatarURL || user.avatarURL || setDefaultAvatar()}
                alt="user avatar"
              />
              <LogoStyles>
                <ButtonIcon name="add-board"></ButtonIcon>
              </LogoStyles>
            </BlockLogoStyles>

            <input
              type="file"
              name="avatar"
              style={{display: "none"}}
              onChange={handleFileChange}
            />
          </LabelStyle>
          <label htmlFor="name">
            <StyledField name="name" autoComplete="off" placeholder="login" />
            <ErrorMsg name="name" component="span" />
          </label>

          <label htmlFor="email">
            <StyledField
              name="email"
              autoComplete="off"
              placeholder="email"
              type="email"
              disabled
            />
            <ErrorMsg name="email" component="span" />
          </label>

          <label style={{position: "relative"}}>
            <StyledField
              type={showPassword ? "text" : "password"}
              autoComplete="off"
              name="password"
              placeholder="Enter password"
            />

            <IconHideShow
              name="hide-show"
              onClick={togglePasswordVisibility}
              style={BattonPasswordDisplayStyle}>
              {showPassword ? "Hide" : "Show"}
            </IconHideShow>

            <ErrorMsg name="password" component="span" />
          </label>
        </LabelBox>
        <ButtonStyle type="submit">Send</ButtonStyle>
      </StyledForm> */}
    </Formik>
  );
};
