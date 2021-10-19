import OverlayTrigger, { OverlayTriggerRenderProps } from 'react-bootstrap/OverlayTrigger';
import OverlayToolTip from 'react-bootstrap/Tooltip';
import { Placement } from 'react-bootstrap/esm/types';

interface Props {
    key?: string;
    id?: string;
    tip: string;
    placement: Placement | undefined;
    children: React.ReactElement | ((props: OverlayTriggerRenderProps) => React.ReactNode);
}

export const Tooltip = (props: Props) =>
    <OverlayTrigger
        key={`${props.key || props.id || props.tip}_key`}
        placement={props.placement || "left"}
        overlay={
            <OverlayToolTip id={props.id || `${props.key}_tooltip`}>{props.tip}
            </OverlayToolTip>
        }
    >
        {props.children}
    </OverlayTrigger>
    ;

export default Tooltip;