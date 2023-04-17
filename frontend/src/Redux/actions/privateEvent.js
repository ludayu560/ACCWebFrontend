import axios from "axios";
import {
  CREATE_EVENT_PRIVATE_SUCCESS,
  CREATE_EVENT_PRIVATE_FAIL,
  UPDATE_EVENT_PRIVATE_SUCCESS,
  UPDATE_EVENT_PRIVATE_FAIL,
} from "./types";
//
// Private event invited
//

export const change_private_event_attendee_invited_status =
  (private_event_invited_id) => async (dispatch) => {
    const access = localStorage.getItem("access");
    if (access) {
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        };
        const res = axios.get(
          `${process.env.REACT_APP_API_URL}/EventPrivateInvited/${private_event_invited_id}`,
          config
        );

        const PrivateEventAttendingformData = new FormData();
        PrivateEventAttendingformData.append("event_id", res.data.event_id);
        PrivateEventAttendingformData.append("first_name", res.data.first_name);
        PrivateEventAttendingformData.append("last_name", res.data.last_name);
        PrivateEventAttendingformData.append("email", res.data.email);
        const deleteResult = axios.delete(
          `${process.env.REACT_APP_API_URL}/EventPrivateInvited/${private_event_invited_id}`,
          config
        );
        const result = axios.post(
          `${process.env.REACT_APP_API_URL}/EventPrivateAttending/`,
          PrivateEventAttendingformData,
          config
        );
        dispatch({
          type: CREATE_EVENT_PRIVATE_SUCCESS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: CREATE_EVENT_PRIVATE_FAIL,
        });
      }
    } else {
      dispatch({
        type: CREATE_EVENT_PRIVATE_FAIL,
      });
    }
  };

export const create_private_event = (private_event) => async (dispatch) => {
  const access = localStorage.getItem("access");

  if (access) {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      };
      const formData = new FormData();
      formData.append("event_name", private_event.event_name);
      formData.append("event_date_time", private_event.event_date_time);
      formData.append("event_location", private_event.event_location);
      formData.append("event_description", private_event.event_description);
      formData.append("event_what_to_bring", private_event.event_what_to_bring);
      if (private_event.event_image) {
        formData.append("event_image", private_event.event_image);
      }
      formData.append("private_event", private_event.creator_listing_account);

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/EventPrivate/`,
        formData,
        config
      );

      const PrivateEventInvitedformData = new FormData();
      PrivateEventInvitedformData.append("event_id", res.data.id);
      for (let i = 0; i < private_event.invited.length; i++) {
        PrivateEventInvitedformData.set(
          "first_name",
          private_event.invited[i].first_name
        );
        PrivateEventInvitedformData.set(
          "last_name",
          private_event.invited[i].last_name
        );
        PrivateEventInvitedformData.set(
          "email",
          private_event.invited[i].email
        );
        const res = axios.post(
          `${process.env.REACT_APP_API_URL}/EventPrivateInvited/`,
          PrivateEventInvitedformData,
          config
        );
      }

      const PrivateEventAttendingformData = new FormData();
      PrivateEventAttendingformData.append("event_id", res.data.id);
      for (let i = 0; i < private_event.attending.length; i++) {
        PrivateEventAttendingformData.set(
          "first_name",
          private_event.invited[i].first_name
        );
        PrivateEventAttendingformData.set(
          "last_name",
          private_event.invited[i].last_name
        );
        PrivateEventAttendingformData.set(
          "email",
          private_event.invited[i].email
        );
        const res = axios.post(
          `${process.env.REACT_APP_API_URL}/EventPrivateAttending/`,
          PrivateEventAttendingformData,
          config
        );
      }

      dispatch({
        type: CREATE_EVENT_PRIVATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_EVENT_PRIVATE_FAIL,
      });
    }
  } else {
    dispatch({
      type: CREATE_EVENT_PRIVATE_FAIL,
    });
  }
};

export const update_private_event = (private_event) => async (dispatch) => {
  const access = localStorage.getItem("access");
  if (access) {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      };
      const formData = new FormData();
      formData.append("event_name", private_event.event_name);
      formData.append("event_date_time", private_event.event_date_time);
      formData.append("event_location", private_event.event_location);
      formData.append("event_description", private_event.event_description);
      formData.append("event_what_to_bring", private_event.event_what_to_bring);
      if (private_event.event_image) {
        formData.append("event_image", private_event.event_image);
      }
      formData.append("private_event", private_event.creator_id);
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/EventPrivate/${private_event.id}/`,
        formData,
        config
      );

      const deleteInvitedRes = await axios.delete(
        `${process.env.REACT_APP_API_URL}/EventPrivateInvitedDeleteAll/${private_event.id}`,
        config
      );
      const deleteAttendingRes = await axios.delete(
        `${process.env.REACT_APP_API_URL}/EventPrivateAttendingDeleteAll/${private_event.id}`,
        config
      );

      const PrivateEventInvitedformData = new FormData();
      PrivateEventInvitedformData.append("event_id", private_event.creator_id);
      for (let i = 0; i < private_event.invited.length; i++) {
        PrivateEventInvitedformData.set(
          "first_name",
          private_event.invited[i].first_name
        );
        PrivateEventInvitedformData.set(
          "last_name",
          private_event.invited[i].last_name
        );
        PrivateEventInvitedformData.set(
          "email",
          private_event.invited[i].email
        );
        const res = axios.post(
          `${process.env.REACT_APP_API_URL}/EventPrivateInvited/`,
          PrivateEventInvitedformData,
          config
        );
      }

      const PrivateEventAttendingformData = new FormData();
      PrivateEventAttendingformData.append(
        "event_id",
        private_event.creator_id
      );
      for (let i = 0; i < private_event.invited.length; i++) {
        PrivateEventAttendingformData.set(
          "first_name",
          private_event.invited[i].first_name
        );
        PrivateEventAttendingformData.set(
          "last_name",
          private_event.invited[i].last_name
        );
        PrivateEventAttendingformData.set(
          "email",
          private_event.invited[i].email
        );
        const res = axios.post(
          `${process.env.REACT_APP_API_URL}/EventPrivateAttending/`,
          PrivateEventAttendingformData,
          config
        );
      }
      dispatch({
        type: UPDATE_EVENT_PRIVATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_EVENT_PRIVATE_FAIL,
      });
    }
  } else {
    dispatch({
      type: UPDATE_EVENT_PRIVATE_FAIL,
    });
  }
};
