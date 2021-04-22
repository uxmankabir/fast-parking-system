class SlotsController < ApplicationController

  def general

  end

  def special
    @slot1 = Slot.slot1.last
    @slot2 = Slot.slot2.last
  end

  def create
    Slot.create(slot_create_params)
    redirect_to special_slots_path
  end

  def slot_info
    @slot = Slot.reserved.new(slot_no: params[:slot_no])
  end

  def free_slot
    slot = (params[:slot_no] == "slot1") ? Slot.slot1.last : Slot.slot2.last
    if(slot.reserved?)
      if((slot.created_at + 5.minute) < Time.now)
        Slot.free.create(slot_no: params[:slot_no])
        redirect_to special_slots_path
      end
    elsif(slot.occupied?)
      Slot.free.create(slot_no: params[:slot_no])
      redirect_to special_slots_path
    end
  end

  def occupie_slot
    slot = (params[:slot_no] == "slot1") ? Slot.slot1.last : Slot.slot2.last
    if(slot.reserved?)
      slot.dup.occupied!
      redirect_to special_slots_path
    end
  end

  private

  def slot_create_params
    params.require(:slot).permit(:slot_no, :name, :vehicle_no, :vehicle_model, :status)
  end

end