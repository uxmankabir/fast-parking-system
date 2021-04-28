module ApplicationHelper

  def active_link(controller)
    active = if (controller_name == "slots" || controller_name == "home") && controller == "home"
      "active"
    elsif controller_name == "contact_us" && controller == "contact_us"
      "active"
    end
    active
  end

end
